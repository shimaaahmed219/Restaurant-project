// const ValidationError =(data)=>{

// let errors ={}
// const validationError = {};

//     if (!data.name.trim()) {
//       validationError.name = " name is is Required";
//     } else{
//       validationError.name = ""
//     }
//     if(!data.password.trim()){
//       validationError.password = " password is Required"
//     }
//     if(data.password.length >8){
//       validationError.password= "Password must be greater than 6 characters"
//     }
//     if(!data.password_confirmation.trim()){
//       validationError.password_confirmation ="password_confirmation is Required"
//     }

//     if(data.password_confirmation != data.password){
//       validationError.password_confirmation ="pssword is not defaind"
//     }
//     if(!data.email.trim()){
//       validationError.email =" email is Required "
//     }
//     else if(!/\S+@\S\.\S+/.test(data.email)){
          
//       validationError.email ="Invalid Email Address"
//     }

//     return errors
   
    

// }
// export default ValidationError