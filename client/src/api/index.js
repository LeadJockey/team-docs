import axios from 'axios'

export const createRequest = config => axios(config)

export const successHandler = response=>{
  //무엇인가 예외처리라던가... 공통처리를 진행함 200, 204 -200
  const apiStatus = parseInt(response.data.status);
  
  if(response.status == 200 && apiStatus == 200){
    return { apiStatus , data : response.data.data }
  }else{
    return { apiStatus }
  }
}

export const errerHandler = err => {
  console.log(err)
  // err. status..... 400, 401, 404, 501,502
}




