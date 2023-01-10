void main() {
  print('hello world');
  
  var name = 'sun'; // 변수 만들기 -> 타입을 지정해주지 않아도 타입 유추 가능
  // name = 1; 변수 name의 유추 타입이 string이기 때문에 number 할당 불가

  String apple = 'apple'; // String타입의 변수를 만들 수도 있음
  String? banana = 'banana'; //타입 뒤에 '?'를 붙이면 nullable, (기본적으로 변수는 nonNull)
  banana = null;

  final isFinal = "i'm final like const at JS"; // final 변수는 JS의 const와 같다. (변경할 수 없음)
  late final isLate; // late는 변수를 선언하면서 할당을 하지 않아도 된다. (API에서 데이터를 받아와 할당하는 식으로 쓰임)
  const isConst = '121212'; // const는 상수를 담는 변수이다. 항상 고정된 값.
  /**
  final: 값을 재할당하지 못하는 변수를 만듦
  dynamic type: 어떤 타입의 데이터가 들어올 지 모를 때 사용함
  const: 컴파일 할 때 값을 알고 있는 변수
  final: 런타임 중에 만들어질 수 있는 변수
  late: final, var, String같은 것들 앞에 써줄 수 있는 수식어로서 어떤 데이터가 올 지 모를 때 사용한다.
   */
}