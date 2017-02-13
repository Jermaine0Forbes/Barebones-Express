
module.exports ={

  grabValues : (obj)=>{
     var data = {};
    for(prop in obj){
      data[prop] = obj[prop]
    }

    return data;
  },

   grabAndAddValues: (obj,add)=>{
    var data = {};
   for(prop in obj){
     data[prop] = obj[prop]
   }
   for(prop in add){
     data[prop] = add[prop]
   }

   return data;
 },


  action:()=>{
    console.log("hello");
  },

  setExpireTime:(time)=>{
    var minutes, hours, days, weeks, months, years;
    minutes  =  (time.minute || 0 )* 60000;
    hours  = (time.hour|| 0) * 36000000;
    days  = (time.day|| 0) * 86400000;
    weeks  = (time.week|| 0) * 604800000;
    months  = (time.month|| 0 )* 2419200000;
    years  = (time.year|| 0 )* 31536000000;
    date = new Date((Date.now()+years+months+weeks+days+hours+minutes));
    return date.toUTCString();
  },
  setMilliTime:(time)=>{
    var minutes, hours, days, weeks, months, years;
    minutes  =  (time.minute || 0 )* 60000;
    hours  = (time.hour|| 0) * 36000000;
    days  = (time.day|| 0) * 86400000;
    weeks  = (time.week|| 0) * 604800000;
    months  = (time.month|| 0 )* 2419200000;
    years  = (time.year|| 0 )* 31536000000;
    date = (Date.now()+years+months+weeks+days+hours+minutes);
    return date;
  },
  setMaxTime:(time)=>{
    var minutes, hours, days, weeks, months, years;
    minutes  =  (time.minute || 0 )* 60000;
    hours  = (time.hour|| 0) * 36000000;
    days  = (time.day|| 0) * 86400000;
    weeks  = (time.week|| 0) * 604800000;
    months  = (time.month|| 0 )* 2419200000;
    years  = (time.year|| 0 )* 31536000000;

    return (years+months+weeks+days+hours+minutes);
  },

  convertMilliTime:(milliseconds)=>{
    var time = {
       seconds:(milliseconds / 1000),
       minutes:(milliseconds / 60000),
       hours:(milliseconds / 36000000),
       weeks:(milliseconds / 604800000),
       months:(milliseconds / 2419200000),
       years:(milliseconds / 31536000000),
       showAll:function(){
         var msg =
        `
         seconds: ${this.seconds}
         minutes: ${this.minutes}
         hours: ${this.hours}
         weeks: ${this.weeks}
         months: ${this.months}
         years: ${this.years}`;
         console.log(msg);
       },
    }//time object

    return time;
  },

  rootPath: __dirname,

}
