export const handleHome = (req,res)=>{
    const list1 = [1,2,3,4,5]
    res.render("home",{pageTitle:"Home",list1});
}

export const handleUsers = (req,res)=>{
    res.render("users",{pageTitle:"Users"});
}