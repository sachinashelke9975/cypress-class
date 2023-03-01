class Login{
   enterUserName(args){
    const userName = cy.get("input[name='uid']")
    .type(args)
    return this;
   } 
   enterPassword(args){
    const password = cy.get("input[name='password']")
    .type(args)
    return this;
   } 
}
export default Login;