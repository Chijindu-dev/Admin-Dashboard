// sidebar imports

import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare
} from '@iconscout/react-unicons'




import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";





export const SideBarData = [
    {

    icon: UilEstate,
    Heading: "Dashboard"
},
{

    icon: UilClipboardAlt,
    Heading: "Orders"
},
{

    icon: UilUsersAlt,
    Heading: "Customers"
},
{

    icon: UilPackage,
    Heading: "Products"
},
{

    icon: UilChart,
    Heading: "Analytics"
},



]


export const CardsData=[
    {
        title : "Sales",
        color:{
            background:"linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5", 
        },
        barValue: 70,
        Value: "25,970",
        png: UilUsdSquare,
        series:[
            {
                name:"Sales",
                data:[31,40,28,51,42,109,100]
            },
        ],

    },
    {
        title : "Revenue",
        color:{
            background:"linear-gradient(180deg,#ff919d 0%,#fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7", 
        },
        barValue: 80,
        Value: "14,270",
        png: UilMoneyWithdrawal,
        series:[
            {
                name:"Revenue",
                data:[10,100,50,70,80,30,40],
            },
        ],

    },
    {
        title : "Expenses",
        color:{
            background:"linear-gradient(rgb(248,212,154) -146.42%, rgb(255,202,113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d59b", 
        },
        barValue: 60,
        Value: "4,270",
        png: UilClipboardAlt,
        series:[
            {
                name:"Expenses",
                data:[10 ,25,15,30,12,15,20],
            },
        ],

    },
]


export const UpdatesData =[
    {
        img: img1,
        name: 'Andrew Thomas',
        noti: "has ordered Apple smart watch 2500mAh battery",
        time: new Date() // Set time to the current Date object
      },
      {
        img: img2,
        name: 'James Bond',
        noti: "has recieved samsung gadget for charging battery",
        time: new Date() // Set time to the current Date object
      },
      {
        img: img3,
        name: 'iron man',
        noti: "has ordered Apple smart watch,Samsung Gear 2500mAh battery",
        time: new Date() // Set time to the current Date object
      },     
      
]