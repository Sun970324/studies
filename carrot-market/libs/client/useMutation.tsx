import { type } from "os";
import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}
type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [states, setStates] = useState<UseMutationState>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutation(data: any) {
    setStates((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) => setStates((prev) => ({ ...prev, data })))
      .catch((error) => setStates((prev) => ({ ...prev, error })))
      .finally(() => setStates((prev) => ({ ...prev, loading: false })));
  }
  return [mutation, { ...states }];
}
