export const ValidateInput = (name: string, value: string, rules: any) => {
    let errorMessage: string[] = [];

    if(rules[name]?.required && (value === '' || value.toLowerCase().includes('select')) )
        errorMessage.push(rules[name].label + " cannot be empty.")

    if(rules[name]?.isEmail){
        // eslint-disable-next-line
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(!regexp.test(value)){
            errorMessage.push('Invalid '+rules[name].label + ".")
        }
    }

    if(rules[name]?.minValue && value.length < rules[name].minValue){
        errorMessage.push(rules[name].label + " should be more than " + rules[name].minValue + " characters.")
    }

    return errorMessage;
};

export const ValidateForm = (obj:any, rules:any)=>{
    let errors ={};
    Object.keys(obj).forEach((v,key)=>{
        errors = {
            ...errors,
            [v] : ValidateInput(v,obj[v],rules)
        };
    });
    return errors;
}