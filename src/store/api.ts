import axios from 'axios'

import {LoginInfo ,Site, School, City, Locate, Major , LoadStudy, Reg, Batch , SiteRepsonse, LocateResponse, MajorResponse, BatchResponse, LoginResponse, Health} from './models'
// import { Location } from 'vue-router';



 export const API_URL = "/api";
//export const API_URL = "http://127.0.0.1:5000/api";
// http://127.0.0.1:5000/api


// export const conduitApi = axios.create({
//     baseURL: 'http://127.0.0.1:5000/api',
//     // baseURL: '/api',
// });


export function getAxios(auth: any){

    if(auth){

        const token = localStorage.getItem('access_token');
        // alert(token);
        return axios.create({
            baseURL: API_URL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        })
    }
    else{
        return axios.create({
            baseURL: API_URL,
        })

    }
}

export const GdouApi = axios.create({
    baseURL: "https://gdou.scnu.edu.cn/entity"
})

export async function getSiteList() {
    const response = await getAxios(false).get('/site/getsitelist');
    return response.data as SiteRepsonse;
}

export async function getLocationList() {
    const response = await getAxios(false).get('/site/getlocationlist');
    return response.data as LocateResponse;
}


export async function getBatchList() {
    const response = await getAxios(false).get('/recruitplan/getactiveplan');
    return response.data as BatchResponse;
}


export async function addreg(reg: Reg) {
    const response = await getAxios(false).post('/student/prereg',{
        reg,
    });
    return 1;
}


// http://127.0.0.1:5000/api/sso/login?account=jybzj&psw=gdou@2019

// http://127.0.0.1:5000/api/sso/login?account=jybzj&psw=gdou@2019
// http://127.0.0.1:5000/api/sso/login/?account=student&psw=student

export async function login(log: LoginInfo) {

    return getAxios(false).post('/sso/login?account='+log.account+"&psw="+log.psw).then(result=>{
        return result.data as LoginResponse;
    })
    
}

export async function getMajorList(stu: LoadStudy){
    const response = await GdouApi.get('/first/firstPageCombo_getRecMajors.action?sort=id&dir=ASC&requestsiteid='+ stu.site + '&requestedutypeid='+ stu.stu);
    return response.data as MajorResponse
}


export function addHealth(info: Health){

    // alert(onUploadProgress);
    return getAxios(true).post("/health/add",info
    ).then(result=>{

        return result.data as string;
    })
}
export function getHealth(){

    // alert(onUploadProgress);
    return getAxios(true).get("/health/get").then(result=>{

        return result.data as string;
    })
}


