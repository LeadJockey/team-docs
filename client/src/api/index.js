import axios from 'axios'

export const createRequest = config => axios(config)

export const successHandler = response=>{
  //무엇인가 예외처리라던가... 공통처리를 진행함 200, 204 -200
  console.log('공통처리 입니다')
  response.status

  return response
}

export const errerHandler = err => {
  console.log(err)
  // err. status..... 400, 401, 404, 501,502
}



