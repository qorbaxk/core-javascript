// 텍스트에 숫자만 있는지 확인
export const isNumericString = (data)=>{
  data = Number(data);
  return !isNaN(data);
}