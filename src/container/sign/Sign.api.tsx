import { User } from "model/user";
import { mockWrapper } from "util/mock";

const API_URL = process.env.REACT_APP_API_URL;
const API_URL_SIGN = `${API_URL}/sign`;

export async function postSign(user: User): Promise<Boolean> {
  const mock = await mockWrapper<{ value: Boolean }>({ value: true });

  if (mock) {
    return mock.value;
  }

  const response = await fetch(API_URL_SIGN, {
    method: "POST",
    body: JSON.stringify(user),
  });

  
  const { status } = response;

  return status === 201;
}
