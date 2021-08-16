// import { Location } from "vue-router";

export interface Site {
  id: string;
  name: string;
  province: string;
  address: string;
  recruit_phone: string;
}


export interface LoginInfo{
   account: String,
   psw: String

}


export interface School {
  id: string;
  name: string;
  city: string;
  address: string;
}

export interface City {
   city: string;
   schoolList: School[];
}

export interface Locate{
   province: string;
   cityList: City[];
}

export interface StuType{
   id: string;
   name: string;
}

export interface Major{
   id: string;
   name: string;
}

export interface LoadStudy{
   site: string;
   stu: string;
}

export interface Batch{
   code: string;
   id: string;
   name: string;
}

export interface Reg{
   name: string;
   tel: string;
   center: string;
   slevel: string;
   ssubject: string; 
   iscomplete: string;
}

export interface Health{
   q1: string;
   q2: string;
   q3: string;
   q4: string;
   q5: string;
   q6: string;
   q7: string;
}

export interface SiteRepsonse{
   sites: Site[];
}

export interface LocateResponse{
   locations: Locate[];

}

export interface MajorResponse{
   majors: Major[];
}

export interface BatchResponse{
   batch: Batch;
}

export interface LoginResponse{
   status: string;
   token: string;
}

