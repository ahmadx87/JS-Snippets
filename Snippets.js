//iteratable object with manual [Symbol.iterator]
var obj={
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    [Symbol.iterator](){
        let self=this;
        let keys=Object.keys(this);
        let i=0;
        return {
            next(){
                let done=keys.length==i?true:false;
                let value=self[keys[i++]];
                return {value, done};
            }
        }    
    }
}

//iteratable object with generator
let generatorIterableObj={
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    *[Symbol.iterator](){
        for(let item of Object.keys(this)){
            yield item;
        }
    }
}
