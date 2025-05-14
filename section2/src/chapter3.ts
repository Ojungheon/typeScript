// object
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; 읽기 전용 속성이므로 할당할 수 없습니다.
