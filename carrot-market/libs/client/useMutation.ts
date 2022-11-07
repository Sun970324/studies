import { useState } from "react";

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [states, setStates] = useState<UseMutationState<T>>({
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