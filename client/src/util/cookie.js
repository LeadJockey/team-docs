const EXPIRE_DAYS = 0.25;
/**
 * 
 * cookie setting();
 * 
 * @param {*} cname 세팅 할 값 name
 * @param {*} cvalue 세팅할 값 name 에 대한 value
 */
export const setCookie = (cname, cvalue) =>{
  const date = new Date();
  date.setTime(date.getTime()+(EXPIRE_DAYS * 24 * 60 * 60 * 1000) );
  document.cookie = `${cname}=${cvalue};expires=${date.toUTCString()}`  
}
/**
 * 
 * @param {*} name 찾는 cookie
 */
export const getCookie = (name) =>{
  if(name){
    name = new RegExp(name + '=([^;]*)');
    const value = name.test(document.cookie) ? unescape(RegExp.$1) : '';
    return value  
  }
  console.log(document.cookie)
  return document.cookie
 
}
/**
 * 
 * @param {*} name 삭제할 cookie
 */

export const deleteCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
