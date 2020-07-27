const anewFunc = (item1,item2) => {

    const aChild = ()=>{
        console.log(item1);
        return "I Like "+ item2
    }

    const aSecondChild = ()=>{
        //console.log('Do you REALLY -- '+aChild());
        privateishFunction();
        return 'THis has completed'
    }

    const privateishFunction = ()=>{
        console.log('THis can only be called from inside')
    }

    return {aChild, aSecondChild}
};

module.exports = anewFunc;