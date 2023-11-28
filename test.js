// module.exports.profileAnalytics = catchAsync(async (req, res) => {
//   //from to mandate
//   //days => from and to
//   //from and to
//   let fromDate;
//   let toDate;
//   if (req.query.days) {
//     toDate = new Date();
//     fromDate = subtractDaysFromDate(toDate, req.query.days);
//     fromDate = new Date(fromDate);
//     console.log('xxxxxxxxxx');
//     console.log(fromDate, toDate);
//     console.log('xxxxxxxxxx');
//   } else if (req.query.fromDate && req.query.toDate) {
//     ({ fromDate, toDate } = req.query);
//   } else {
//     return res.status(404).json({ error: 'Something is missing' });
//   }

//   /*

//   fromPrevDate
//   toPrevDate

//   */
//   const daysDifference = Math.floor((toDate - fromDate) / (1000 * 60 * 60 * 24));

//   let fromPrevDate = subtractDaysFromDate(fromDate, daysDifference);
//   let toPrevDate = fromDate;

//   console.log('-------------------');
//   console.log('FROM PREV DATE', fromPrevDate);
//   console.log('TO PREV DATE', toPrevDate);
//   console.log('DaysDiff', daysDifference);
//   console.log('FROM DATE', fromDate);
//   console.log('TO DATE', toDate);
//   console.log('-------------------');
//   // console.log(req.user)

//   let blockedUsers = [];
//   for (const item of req.user.blockedUsers) {
//     blockedUsers.push(item.userId);
//   }
//   for (const item of req.user.blockedMe) {
//     blockedUsers.push(item.userId);
//   }

//   const user = await db.User.findOne({ _id: req.user._id }, 'followerIds followers post');
//   console.log("+++++++++")
//   let Followers=[];
//   user.followers.forEach((item)=>{
//     Followers.push(item.user);
//   })
//   console.log(Followers)
//   console.log("+++++++++")
//   // let followerCounts = await db.User.aggregate([
//   //   {
//   //     $match: {
//   //       _id: req.user._id,
//   //     },
//   //   },
//   //   {
//   //     $project: {
//   //       followersByTimePeriod: {
//   //         $filter: {
//   //           input: '$followers',
//   //           as: 'follower',
//   //           cond: {
//   //             $and: [
//   //               {
//   //                 $gte: ['$$follower.follwing_from', fromDate],
//   //               },
//   //               {
//   //                 $lte: ['$$follower.follwing_from', toDate],
//   //               },
//   //             ],
//   //           },
//   //         },
//   //       },
//   //       followersByPrevTimePeriod: {
//   //         $filter: {
//   //           input: '$followers',
//   //           as: 'follower',
//   //           cond: {
//   //             $and: [
//   //               {
//   //                 $gte: ['$$follower.follwing_from', fromPrevDate],
//   //               },
//   //               {
//   //                 $lte: ['$$follower.follwing_from', toPrevDate],
//   //               },
//   //             ],
//   //           },
//   //         },
//   //       },
//   //     },
//   //   },
//   //   {
//   //     $addFields:
//   //       /**
//   //        * newField: The new field name.
//   //        * expression: The new field expression.
//   //        */
//   //       {
//   //         followersInTimePeriod: {
//   //           $size: '$followersByTimePeriod',
//   //         },
//   //         followersInPrevTimePeriod: {
//   //           $size: '$followersByPrevTimePeriod',
//   //         },
//   //         // changePercentage: {
//   //         //   $round: [
//   //         //     {
//   //         //       $multiply: [
//   //         //         { $divide: [ {$size: '$followersByTimePeriod'}, {$size: '$followersByPrevTimePeriod'}] },
//   //         //         100,
//   //         //       ],
//   //         //     },
//   //         //     3,
//   //         //   ],
//   //         // },
//   //       },
//   //   },
//   //   {
//   //     $project:
//   //       /**
//   //        * specifications: The fields to
//   //        *   include or exclude.
//   //        */
//   //       {
//   //         followersByTimePeriod: 1,
//   //         followersByPrevTimePeriod: 1,
//   //         // changePercentage:1
//   //       },
//   //   },
//   // ]);

//   const followerCounts = await db.User.aggregate([
//     {
//       $match: {
//         _id: req.user._id
//       }
//     },
//     {
//       $unwind: "$followers"
//     },
//     {
//       $facet: {
//         followerInTimePeriod: [
//           {
//             $match: {
//               $expr: {
//                 $and: [
//                   { $gte: ["$followers.follwing_from", fromDate] },
//                   { $lte: ["$followers.follwing_from", toDate] }
//                 ]
//               }
//             }
//           }
//         ],
//         followerInPrevTimePeriod: [
//           {
//             $match: {
//               $expr: {
//                 $and: [
//                   { $gte: ["$followers.follwing_from", fromPrevDate] },
//                   { $lte: ["$followers.follwing_from", toPrevDate] }
//                 ]
//               }
//             }
//           }
//         ]
//       }
//     },
//     {
//       $unwind: {
//         path: '$followerInPrevTimePeriod',
//         preserveNullAndEmptyArrays: true,
//       },
//     },
//     {
//       $unwind: {
//         path: '$followerInTimePeriod',
//         preserveNullAndEmptyArrays: true,
//       },
//     },
//     {
//       $project: {
//         followerInTimePeriod: 1,
//         followerInPrevTimePeriod: 1,
//         // followers:1
//       }
//     }
//   ]);




//   //TODO: testing
//   // await db.User.updateOne(
//   //   { _id: user._id },
//   //   {
//   //     $push: { followerIds: req.body.id },
//   //   }
//   // );

//   const profileVisits = await db.ProfileView.aggregate([
//     {
//       $match: {
//         profileUserId: user._id,
//         userId: { $nin: blockedUsers }
//       },
//     },
//     {
//       $facet: {
//         visitsInPrevTimePeriod: [
//           {
//             $match: {
//               createdAt: { $gte: fromPrevDate, $lte: toPrevDate },
//             },
//           },
//           {
//             $group: {
//               _id: null,
//               total: { $sum: 1 },
//             },
//           },
//         ],
//         visitsInTimePeriod: [
//           {
//             $match: {
//               createdAt: { $gte: fromDate, $lte: toDate },
//             },
//           },
//           {
//             $group: {
//               _id: null,
//               total: { $sum: 1 },
//             },
//           },
//         ],
//         visitsByFoll: [
//           {
//             $match: {
//               createdAt: { $gte: fromDate, $lte: toDate },
//               userId:{$in:Followers}
//             },
//           },
//           {
//             $group: {
//               _id: null,
//               total: { $sum: 1 },
//             },
//           },
//         ],
//         visitsByNonFoll: [
//           {
//             $match: {
//               createdAt: { $gte: fromDate, $lte: toDate },
//               userId:{$nin:Followers}
//             },
//           },
//           {
//             $group: {
//               _id: null,
//               total: { $sum: 1 },
//             },
//           },
//         ],
//       },
//     },
//     // {
//     //   $unwind: {
//     //     path: '$visitsInPrevTimePeriod',
//     //     preserveNullAndEmptyArrays: true,
//     //   },
//     // },
//     // {
//     //   $unwind: {
//     //     path: '$visitsInTimePeriod',
//     //     preserveNullAndEmptyArrays: true,
//     //   },
//     // },
//     // {
//     //   $unwind: {
//     //     path: '$visitsByFoll',
//     //     preserveNullAndEmptyArrays: true,
//     //   },
//     // },
//     // {
//     //   $unwind: {
//     //     path: '$visitsByNonFoll',
//     //     preserveNullAndEmptyArrays: true,
//     //   },
//     // },
//     {
//       $addFields: {
//         visitsInTimePeriod: {  $cond: [
//           { $eq: [{$size:'$visitsInTimePeriod'}, 0] },
//           0,
//           { $arrayElemAt: ['$visitsInTimePeriod.total', 0] }
//         ] },
//         visitsInPrevTimePeriod: { $cond: [
//           { $eq: [{$size:'$visitsInPrevTimePeriod'}, 0] },
//           0,
//           { $arrayElemAt: ['$visitsInPrevTimePeriod.total', 0] }
//         ]  },
//         visitsByFoll: {$cond: [
//           { $eq: [{$size:'$visitsByFoll'}, 0] },
//           0,
//           { $arrayElemAt: ['$visitsByFoll.total', 0] }
//         ] },
//         visitsByNonFoll: { $cond: [
//           { $eq: [{$size:'$visitsByNonFoll'}, 0] },
//           0,
//           { $arrayElemAt: ['$visitsByNonFoll.total', 0] }
//         ]  },
//       },
//     },
//     {
//       $addFields: {
//         changePercentage: {
//               $let: {
//                 vars: {
//                   visitsInPrevTimePeriod: '$visitsInPrevTimePeriod',
//                   visitsInTimePeriod: '$visitsInTimePeriod'
//                 },
//                 in: { 
//                   $cond: {
//                     if: { $lt: ['$$visitsInPrevTimePeriod', '$$visitsInTimePeriod'] },
//                     then:
//                     {
//                       $round: [
//                         {
//                           $multiply: [
//                             { $divide: [{ $subtract: ['$$visitsInTimePeriod', '$$visitsInPrevTimePeriod'] }, '$$visitsInTimePeriod'] },
//                             100,
//                           ],
//                         },
//                         3,
//                       ],
//                     },
//                     else: {
//                       $cond: {
//                         if: { $lt: ['$$visitsInTimePeriod', '$$visitsInPrevTimePeriod'] },
//                         then:
//                         {
//                           $round: [
//                             {
//                               $multiply: [
//                                 { $divide: [{ $subtract: ['$$visitsInTimePeriod', '$$visitsInPrevTimePeriod'] }, '$$visitsInPrevTimePeriod'] },
//                                 100,
//                               ],
//                             },
//                             3,
//                           ],
//                         },
//                         else: 0
//                       }
//                     }
//                   },
//                  }
//               }
//         },
//         followingPercentage: {
//           $let: {
//             vars: {
//               visitsInTimePeriod: '$visitsInTimePeriod',
//               visitsByFoll: '$visitsByFoll'

//             },
//             in: { 
//               $cond: {
//                 if: { $eq: ['$$visitsInTimePeriod', 0] },
//                 then: 0,
//                 else: {
//                   $round: [
//                     {
//                       $multiply: [
//                         { 
//                           $divide: [
//                           '$$visitsByFoll',
//                           '$$visitsInTimePeriod'
//                           // { $toDouble: {$ifNull:['$$likesByFoll',0]} },
//                           // { $toDouble: {$ifNull:['$$likesInTimePeriod',0]} },
//                         ],
//                         },
//                         100,
//                       ],
//                     },
//                     3,
//                   ],
//                 },
//               },
//              }
//           }
//     },
//     nonFollowingPercentage: {
//           $let: {
//             vars: {
//               visitsInTimePeriod: '$visitsInTimePeriod',
//               visitsByNonFoll: '$visitsByNonFoll'

//             },
//             in: { 
//               $cond: {
//                 if: { $eq: ['$$visitsInTimePeriod', 0] },
//                 then: 0,
//                 else: {
//                   $round: [
//                     {
//                       $multiply: [
//                         { 
//                           $divide: [
//                           '$$visitsByNonFoll',
//                           '$$visitsInTimePeriod'
//                           // { $toDouble: {$ifNull:['$$likesByFoll',0]} },
//                           // { $toDouble: {$ifNull:['$$likesInTimePeriod',0]} },
//                         ],
//                         },
//                         100,
//                       ],
//                     },
//                     3,
//                   ],
//                 },
//               },
//              }
//           }
//     },
//       }
//     },
//     {
//       $project: {
//         visitsInPrevTimePeriod: 1,
//         visitsInTimePeriod: 1,
//         visitsByFoll: 1,
//         visitsByNonFoll: 1,
//         changePercentage: 1,
//         followingPercentage:1,
//         nonFollowingPercentage:1
//       },
//     },
//   ]);
  
//   // console.log(profileVisits);
//   const keys = Object.keys(profileVisits[0]);
//   console.log("VISITS KEYS-", keys)
//   console.log('current, prev , foll, nonfoll , change')
//   console.log(profileVisits[0].visitsInTimePeriod, profileVisits[0].visitsInPrevTimePeriod, profileVisits[0].visitsByFoll, profileVisits[0].visitsByNonFoll,profileVisits[0].changePercentage)



//   const dashboardLikes = await db.Like.aggregate([
//     {
//       $match: {
//         postedUserId: user._id,
//         userId: { $nin: blockedUsers },
//       },
//     },
//     {
//       $facet: {
//           likesInTimePeriod: [
//             {
//               $match: {
//                 createdAt: { $gte: fromDate, $lte: toDate }
//               }
//             },
//             {
//               $group: {
//                 _id: null,
//                 total: { $sum: 1 }
//               }
//             },
//           ],
//           likesInPrevTimePeriod: [
//             {
//               $match: {
//                 createdAt: { $gte: fromPrevDate, $lte: toPrevDate }
//               }
//             },
//             {
//               $group: {
//                 _id: null,
//                 total: { $sum: 1 }
//               }
//             },
//           ],
//           likesByFoll: [
//             {
//               $match: {
//                 createdAt: { $gte: fromDate, $lte: toDate },
//                 userId: { $in: Followers }
//               }
//             },
//             {
//               $group: {
//                 _id: null,
//                 total: { $sum: 1 }
//               }
//             }
//           ],
//           likesByNonFoll: [
//             {
//               $match: {
//                 createdAt: { $gte: fromDate, $lte: toDate },
//                 userId: { $nin: Followers }
//               }
//             },
//             {
//               $group: {
//                 _id: null,
//                 total: { $sum: 1 }
//               }
//             },
//         ],
//       }
//   },
//     // {
//     //   $unwind: {
//     //     path: '$likesInTimePeriod',
//     //     preserveNullAndEmptyArrays: true,
//     //   },
//     // },
//     // {
//     //   $unwind: {
//     //     path: '$likesInPrevTimePeriod',
//     //     preserveNullAndEmptyArrays: true,
//     //   },
//     // },
//     // {
//     //   $unwind: {
//     //     path: '$likesByFoll',
//     //     preserveNullAndEmptyArrays: true,
//     //   },
//     // },
//     // {
//     //   $unwind: {
//     //     path: '$likesByNonFoll',
//     //     preserveNullAndEmptyArrays: true,
//     //   },
//     // },
//     {
//       $addFields: {
//         likesInTimePeriod: {  $cond: [
//           { $eq: [{$size:'$likesInTimePeriod'}, 0] },
//           0,
//           { $arrayElemAt: ['$likesInTimePeriod.total', 0] }
//         ] },
//         likesInPrevTimePeriod: { $cond: [
//           { $eq: [{$size:'$likesInPrevTimePeriod'}, 0] },
//           0,
//           { $arrayElemAt: ['$likesInPrevTimePeriod.total', 0] }
//         ]  },
//         likesByFoll: {$cond: [
//           { $eq: [{$size:'$likesByFoll'}, 0] },
//           0,
//           { $arrayElemAt: ['$likesByFoll.total', 0] }
//         ] },
//         likesByNonFoll: { $cond: [
//           { $eq: [{$size:'$likesByNonFoll'}, 0] },
//           0,
//           { $arrayElemAt: ['$likesByNonFoll.total', 0] }
//         ]  },
        
//       },
//     },
//     {
//       $addFields: {
//         changePercentage: {
//               $let: {
//                 vars: {
//                   likesInPrevTimePeriod: '$likesInPrevTimePeriod',
//                   likesInTimePeriod: '$likesInTimePeriod'
//                 },
//                 in: { 
//                   $cond: {
//                     if: { $lt: ['$$likesInPrevTimePeriod', '$$likesInTimePeriod'] },
//                     then:
//                     {
//                       $round: [
//                         {
//                           $multiply: [
//                             { $divide: [{ $subtract: ['$$likesInTimePeriod', '$$likesInPrevTimePeriod'] }, '$likesInTimePeriod'] },
//                             100,
//                           ],
//                         },
//                         3,
//                       ],
//                     },
//                     else: {
//                       $cond: {
//                         if: { $lt: ['$$likesInTimePeriod', '$$likesInPrevTimePeriod'] },
//                         then:
//                         {
//                           $round: [
//                             {
//                               $multiply: [
//                                 { $divide: [{ $subtract: ['$$likesInTimePeriod', '$$likesInPrevTimePeriod'] }, '$$likesInPrevTimePeriod'] },
//                                 100,
//                               ],
//                             },
//                             3,
//                           ],
//                         },
//                         else: 0
//                       }
//                     }
//                   },
//                  }
//               }
//         },
//         followingPercentage: {
//               $let: {
//                 vars: {
//                   likesInTimePeriod: '$likesInTimePeriod',
//                   likesByFoll: '$likesByFoll'

//                 },
//                 in: { 
//                   $cond: {
//                     if: { $eq: ['$$likesInTimePeriod', 0] },
//                     then: 0,
//                     else: {
//                       $round: [
//                         {
//                           $multiply: [
//                             { 
//                               $divide: [
//                               '$$likesByFoll',
//                               '$$likesInTimePeriod'
//                               // { $toDouble: {$ifNull:['$$likesByFoll',0]} },
//                               // { $toDouble: {$ifNull:['$$likesInTimePeriod',0]} },
//                             ],
//                             },
//                             100,
//                           ],
//                         },
//                         3,
//                       ],
//                     },
//                   },
//                  }
//               }
//         },
//         nonFollowingPercentage: {
//               $let: {
//                 vars: {
//                   likesInTimePeriod: '$likesInTimePeriod',
//                   likesByNonFoll: '$likesByNonFoll'

//                 },
//                 in: { 
//                   $cond: {
//                     if: { $eq: ['$$likesInTimePeriod', 0] },
//                     then: 0,
//                     else: {
//                       $round: [
//                         {
//                           $multiply: [
//                             { 
//                               $divide: [
//                               '$$likesByNonFoll',
//                               '$$likesInTimePeriod'
//                               // { $toDouble: {$ifNull:['$$likesByFoll',0]} },
//                               // { $toDouble: {$ifNull:['$$likesInTimePeriod',0]} },
//                             ],
//                             },
//                             100,
//                           ],
//                         },
//                         3,
//                       ],
//                     },
//                   },
//                  }
//               }
//         },
//       }
//     },
//     {
//       $project: {
//         likesInTimePeriod: 1,
//         likesInPrevTimePeriod: 1,
//         likesByFoll: 1,
//         likesByNonFoll: 1,
//         followingPercentage: 1,
//         nonFollowingPercentage: 1,
//         changePercentage: 1,
//       },
//     },
//   ]);

//   const keys2 = Object.keys(dashboardLikes[0]);
//   console.log("LIKES KEYS-", keys2)
//   console.log("{prev time period, time period, change perc,foll, non foll}",dashboardLikes[0].likesInPrevTimePeriod,dashboardLikes[0].likesInTimePeriod,
//   dashboardLikes[0].changePercentage,dashboardLikes[0].likesByFoll,dashboardLikes[0].likesByNonFoll,dashboardLikes[0].followinfPercentage,dashboardLikes[0].nonFollowingPercentage)




//   //TODO: calculate Followers analytics

//   // const dashboardFollowers = await db.User.aggregate([
//   //   {
//   //     $match:{
//   //       _id:user._id
//   //     }
//   //   },
//   //   {
//   //     $project:{
//   //       follower:'$followers',
//   //       // total:{$size:'$followers'}
//   //     }
//   //   },
//   //   {
//   //     $unwind:{
//   //       path: '$follower',
//   //       preserveNullAndEmptyArrays: true
//   //     }
//   //   },
//   //   {
//   //     $match:{
//   //       "follower.follwing_from":{$gte: timestamp}
//   //     }
//   //   },
//   //   {
//   //     $group:{
//   //       _id: null,
//   //       follInTime: {
//   //         $sum: 1  }
//   //     }
//   //   },
//   //   {
//   //     $addFields:{
//   //       Followers:'$total',
//   //       follInTimePeriod:'$follInTime',
//   //       changePercentage:{
//   //         $round: [
//   //           { $multiply: [{ $divide: ['$follInTime', '$total'] }, 100] },
//   //           3,
//   //         ],
//   //       },
//   //     }
//   //   },

//   // // #################################
//   // // {
//   // //   $addFields:{
//   // //     likes:'$totalLikes.total',
//   // //     likesInTimePeriod:'$likesInTimePeriod.total',
//   // //     likesByFoll:'$likesByFoll.total',
//   // //     changePercentage:{
//   // //       $round: [
//   // //         { $multiply: [{ $divide: ['$likesInTimePeriod.total', '$totalLikes.total'] }, 100] },
//   // //         3,
//   // //       ],
//   // //     },
//   // //     followingPercentage: {
//   // //       $round: [
//   // //         { $multiply: [{ $divide: ['$likesByFoll.total', '$likes.total'] }, 100] },
//   // //         3,
//   // //       ],
//   // //     },
//   // //     nonFollowingPercentage: {
//   // //       $subtract: [
//   // //         100,
//   // //         {
//   // //           $round: [
//   // //             { $multiply: [{ $divide: ['$likesByFoll.total', '$likes.total'] }, 100] },
//   // //             3,
//   // //           ],
//   // //         },
//   // //       ],
//   // //     },
//   // //   }
//   // // },

//   //   {

//   //     $project:{
//   //       _id:0,
//   //       // Followers:{$size:'$followers'},
//   //       follInTimePeriod:1,
//   //       changePercentage:1
//   //       // follower:1,
//   //       // total:1,follInTime:1

//   //     }
//   //   }
//   // ])
//   // console.log(dashboardFollowers[0].Followers)

//   // const dashboardFollowers = await db.User.aggregate([
//   //   {
//   //     $match:{
//   //       _id:user._id
//   //     }
//   //   },
//   //   {
//   //     $unwind:{
//   //       path:'$followers',
//   //       preserveNullAndEmptyArrays: true

//   //     }
//   //   },
//   //   {
//   //     $project:{
//   //       totalFoll:{$count:'$followers'}
//   //     }
//   //   },
//   //   {
//   //     $facet:{

//   //       total:[
//   //         {
//   //           $match:{
//   //                   "totalFoll.follwing_from":{$gte: timestamp}
//   //           }
//   //         },
//   //       ]
//   //     }
//   //   },
//   //   {
//   //     $project:{
//   //       total:1
//   //     }
//   //   }
//   // ])
//   // console.log(dashboardFollowers[0],dashboardFollowers);



//   const dashboardFollowers= await db.User.aggregate([
//     {
//       $match:{
//         _id:user._id,

//       },
//     },
//     {
//       $project:{
//         followers:1
//       }
//     },
//     // {
//     //   $unwind:{
//     //     path:'$followers',
//     //     preserveNullAndEmptyArrays: true,
//     //   }
//     // }
//     // {
//     //   $facet:{
//     //     foll:[
//     //       {
//     //         createdAt:{ $gte: fromPrevDate, $lte: toPrevDate  }
//     //       }
//     //     ]
//     //   }
//     // },
//     // {
//     //   $project:{
//     //     foll:1
//     //   }
//     // }
//   ])




//   const dashboardviews = await db.PostView.aggregate([
//     {
//       $match: {
//         postedUserId: user._id,
//         userId: { $nin: blockedUsers }
//       },
//     },
//     {
//       $facet: {
//         postViewsInTimePeriod: [
//           {
//             $match: {
//               createdAt: { $gte: fromDate, $lte: toDate },
//             },
//           },
//           {
//             $group: {
//               _id: null,
//               total: { $sum: 1 },
//             },
//           },
//         ],
//         postViewsInPrevTimePeriod: [
//           {
//             $match: {
//               createdAt: { $gte: fromPrevDate, $lte: toPrevDate },
//             },
//           },
//           {
//             $group: {
//               _id: null,
//               total: { $sum: 1 },
//             },
//           },
//         ],
//       },
//     },
//     // {
//     //   $unwind: {
//     //     path: '$postViewsInTimePeriod',
//     //     preserveNullAndEmptyArrays: true,
//     //   },
//     // },
//     // {
//     //   $unwind: {
//     //     path: '$postViewsInPrevTimePeriod',
//     //     preserveNullAndEmptyArrays: true,
//     //   },
//     // },
//     {
//       $addFields: {
//         postViewsInTimePeriod: {  $cond: [
//           { $eq: [{$size:'$postViewsInTimePeriod'}, 0] },
//           0,
//           { $arrayElemAt: ['$postViewsInTimePeriod.total', 0] }
//         ] },
//         postViewsInPrevTimePeriod: {  $cond: [
//           { $eq: [{$size:'$postViewsInPrevTimePeriod'}, 0] },
//           0,
//           { $arrayElemAt: ['$postViewsInPrevTimePeriod.total', 0] }
//         ] },
//       },
//     },
//     {
//       $addFields: {
//         changePercentage: {
//               $let: {
//                 vars: {
//                   postViewsInPrevTimePeriod: '$postViewsInPrevTimePeriod',
//                   postViewsInTimePeriod: '$postViewsInTimePeriod'
//                 },
//                 in: { 
//                   $cond: {
//                     if: { $lt: ['$$postViewsInPrevTimePeriod', '$$postViewsInTimePeriod'] },
//                     then:
//                     {
//                       $round: [
//                         {
//                           $multiply: [
//                             { $divide: [{ $subtract: ['$$postViewsInTimePeriod', '$$postViewsInPrevTimePeriod'] }, '$$postViewsInTimePeriod'] },
//                             100,
//                           ],
//                         },
//                         3,
//                       ],
//                     },
//                     else: {
//                       $cond: {
//                         if: { $lt: ['$$postViewsInTimePeriod', '$$postViewsInPrevTimePeriod'] },
//                         then:
//                         {
//                           $round: [
//                             {
//                               $multiply: [
//                                 { $divide: [{ $subtract: ['$$postViewsInTimePeriod', '$$postViewsInPrevTimePeriod'] }, '$$postViewsInPrevTimePeriod'] },
//                                 100,
//                               ],
//                             },
//                             3,
//                           ],
//                         },
//                         else: 0
//                       }
//                     }
//                   },
//                  }
//               }
//         },
//       },
//     },
//     {
//       $project: {
//         postViewsInTimePeriod: 1,
//         postViewsInPrevTimePeriod: 1,
//         changePercentage: 1,
//       },
//     },
//   ]);

//   const keys4 = Object.keys(dashboardviews[0]);
//   console.log("POST VIEWS-", keys4)
//   console.log(dashboardviews[0].postViewsInTimePeriod, dashboardviews[0].postViewsInPrevTimePeriod, dashboardviews[0].changePercentage)

 

//   //TODO: calculate comments
//   const dashboardComment = await db.SubPost.aggregate([
//     {
//       $match: {
//         postId: { $in: user.post },
//         userId: { $nin: blockedUsers }

//       },
//     },
//     {
//       $facet: {
//         subpostsInTimePeriod: [
//           {
//             $match: {
//               createdAt: { $gte: fromDate, $lte: toDate },
//             },
//           },
//           {
//             $group: {
//               _id: null,
//               total: { $sum: 1 },
//             },
//           },
//         ],
//         subpostInPrevTimePeriod: [
//           {
//             $match: {
//               createdAt: { $gte: fromPrevDate, $lte: toPrevDate },
//             },
//           },
//           {
//             $group: {
//               _id: null,
//               total: { $sum: 1 },
//             },
//           },
//         ],
//       }
//     },
//     // {
//     //   $unwind: {
//     //     path: '$subpostsInTimePeriod',
//     //     preserveNullAndEmptyArrays: true,
//     //   }
//     // },
//     // {
//     //   $unwind: {
//     //     path: '$subpostInPrevTimePeriod',
//     //     preserveNullAndEmptyArrays: true,
//     //   }
//     // },
//     {
//       $addFields: {
//         subpostsInTimePeriod: {  $cond: [
//           { $eq: [{$size:'$subpostsInTimePeriod'}, 0] },
//           0,
//           { $arrayElemAt: ['$subpostsInTimePeriod.total', 0] }
//         ] },
//         subpostsInPrevTimePeriod: {  $cond: [
//           { $eq: [{$size:'$subpostInPrevTimePeriod'}, 0] },
//           0,
//           { $arrayElemAt: ['$subpostInPrevTimePeriod.total', 0] }
//         ] },
//       }
//     },
//     {
//       $addFields: {
//         changePercentage: {
//               $let: {
//                 vars: {
//                   subpostsInPrevTimePeriod: '$subpostsInPrevTimePeriod',
//                   subpostsInTimePeriod: '$subpostsInTimePeriod'
//                 },
//                 in: { 
//                   $cond: {
//                     if: { $lt: ['$$subpostsInPrevTimePeriod', '$$subpostsInTimePeriod'] },
//                     then:
//                     {
//                       $round: [
//                         {
//                           $multiply: [
//                             { $divide: [{ $subtract: ['$$subpostsInTimePeriod', '$$subpostsInPrevTimePeriod'] }, '$$subpostsInTimePeriod'] },
//                             100,
//                           ],
//                         },
//                         3,
//                       ],
//                     },
//                     else: {
//                       $cond: {
//                         if: { $lt: ['$$subpostsInTimePeriod', '$$subpostsInPrevTimePeriod'] },
//                         then:
//                         {
//                           $round: [
//                             {
//                               $multiply: [
//                                 { $divide: [{ $subtract: ['$$subpostsInTimePeriod', '$$subpostsInPrevTimePeriod'] }, '$$subpostsInPrevTimePeriod'] },
//                                 100,
//                               ],
//                             },
//                             3,
//                           ],
//                         },
//                         else: 0
//                       }
//                     }
//                   },
//                  }
//               }
//         },
//       },
//     },
//     {
//       $project: {
//         subpostsInTimePeriod: 1,
//         subpostsInPrevTimePeriod: 1,
//         changePercentage: 1
//       },
//     },
//   ]);

//   console.log("SUBPOST{in time period,prev time Period}",dashboardComment[0].subpostsInTimePeriod,dashboardComment[0].subpostInPrevTimePeriod,dashboardComment[0].changePercentage)
  

//   const totalPosts = await db.Post.find({ userId: user._id, createdAt:{ $gte:fromDate , $lte:toDate } }).count();
//   const totalProducts = await db.Catalogue.find({ userId: user._id,  createdAt:{ $gte:fromDate , $lte:toDate } }).count();
//   const totalJobs = await db.spaarksJob.find({ userId: user._id , createdAt:{ $gte:fromDate , $lte:toDate } }).count();

//   // console.log('------------');
//   // // console.log(followerCounts);
//   // console.log('------------');

//   res.status(200).send({
//     status: 'Success',
//     visits: profileVisits[0],
//     likes: dashboardLikes[0],
//     foll: dashboardFollowers[0],
//     views: dashboardviews[0],
//     comments: dashboardComment[0],
//     // followers: {
//     //   followersInTimePeriod: followerCounts[0].followersInTimePeriod,
//     //   followersInPrevTimePeriod: followerCounts[0].followersInPrevTimePeriod,
//     // },
//     totalPosts,
//     totalProducts,
//     totalJobs,
//   });
// });



function roundOff(num){

  if(num<5)
    return 5;
  else{
    return Math.ceil(num/5) * 5;
  }
}

// let arr=[];
// fromDate=new Date('2023-09-18T19:14:14.969Z');
// arr.push(new Date('2023-09-18T19:14:14.969Z'));
// // console.log(fromDate)
// // console.log(arr.push(new Date(fromDate.setDate(fromDate.getDate()+2))))
// // console.log(arr)
// const date=roundOff(7);

// const dayDuration=date/5;
// for(let i=0;i<6;i++){
  
//   const date=fromDate.setDate( fromDate.getDate() + dayDuration );
//   arr.push(new Date(date));
//   console.log(new Date(date));
// }
// console.log(arr);

// const graph= await db.profileView.aggregate([
//   {
//     $match:{
//       profileuserId:user._id,
//       userId:{$nin:blockedUser}
//     },
//     $facet:{
//       pair1:[
//         {
//           $match:{
//             createdAt:{
//               $gte:arr[0] , $lte: arr[1]     
//             }
//           }
//         }
//       ],
//       pair2:[
//         {
//           $match:{
//             createdAt:{
//               $gte:arr[1] , $lte: arr[2]     
//             }
//           }
//         }
//       ],
//       pair3:[
//         {
//           $match:{
//             createdAt:{
//               $gte:arr[2] , $lte: arr[3]     
//             }
//           }
//         }
//       ],
//       pair4:[
//         {
//           $match:{
//             createdAt:{
//               $gte:arr[4] , $lte: arr[5]     
//             }
//           }
//         }
//       ],
//       pair5:[
//         {
//           $match:{
//             createdAt:{
//               $gte:arr[5] , $lte: arr[6]     
//             }
//           }
//         }
//       ]
//     },
//   }
// ])


//*****PROFILE VIEWS*****
toDate='2023-09-20T15:46:23.443Z';
fromDate='2023-08-21T15:46:23.443Z';

toDate=new Date(toDate)
fromDate=new Date(fromDate)

daysDifference=toDate-fromDate;

daysDifference=daysDifference/(1000*60*60*24);

console.log(daysDifference);

let arr1 = [];
let dt1 = fromDate;
dt1 = new Date(dt1);
console.log("**",dt1)


const date = roundOff(daysDifference);
const dayDuration = date / 5;
console.log("Day Dur graph1",dayDuration)
for (let i = 0; i < 5; i++) {
  let date = dt1.setDate(dt1.getDate() + dayDuration);
  date = new Date(date);
  date = date.setHours(0, 0, 0);
  date=new Date(date);
  arr1.push(date);
  console.log(date);

}
fromDate=fromDate.setHours(0,0,0);
fromDate=new Date(fromDate);
arr1.unshift(fromDate)
arr1[6]=toDate;
console.log(arr1);

// const graph1 = await db.ProfileView.aggregate([
//   {
//     $match: {
//       profileUserId: user._id,
//       userId: { $nin: blockedUsers },
//     },
//   },
//   {
//     $facet: {
//       pair1: [
//         {
//           $match: {
//             createdAt: {
//               $gte: arr1[0],
//               $lte: arr1[1],
//             },
//           },
//         },
//         {
//           $addFields: {
//             val: {
//               $cond: {
//                 if: { $in: ['$userId', Followers] },
//                 then: 'foll',
//                 else: 'nonfol',
//               },
//             },
//           },
//         },
//         {
//           $group: {
//             _id: '$val',
//             count: { $sum: 1 },
//           },
//         },
//       ],
//       pair2: [
//         {
//           $match: {
//             createdAt: {
//               $gte: arr1[1],
//               $lte: arr1[2],
//             },
//           },
//         },
//         {
//           $addFields: {
//             val: {
//               $cond: {
//                 if: { $in: ['$userId', Followers] },
//                 then: 'foll',
//                 else: 'nonfol',
//               },
//             },
//           },
//         },
//         {
//           $group: {
//             _id: '$val',
//             count: { $sum: 1 },
//           },
//         },
//       ],
//       pair3: [
//         {
//           $match: {
//             createdAt: {
//               $gte: arr1[2],
//               $lte: arr1[3],
//             },
//           },
//         },
//         {
//           $addFields: {
//             val: {
//               $cond: {
//                 if: { $in: ['$userId', Followers] },
//                 then: 'foll',
//                 else: 'nonfol',
//               },
//             },
//           },
//         },
//         {
//           $group: {
//             _id: '$val',
//             count: { $sum: 1 },
//           },
//         },
//       ],
//       pair4: [
//         {
//           $match: {
//             createdAt: {
//               $gte: arr1[3],
//               $lte: arr1[4],
//             },
//           },
//         },
//         {
//           $addFields: {
//             val: {
//               $cond: {
//                 if: { $in: ['$userId', Followers] },
//                 then: 'foll',
//                 else: 'nonfol',
//               },
//             },
//           },
//         },
//         {
//           $group: {
//             _id: '$val',
//             count: { $sum: 1 },
//           },
//         },
//       ],
//       pair5: [
//         {
//           $match: {
//             createdAt: {
//               $gte: arr1[4],
//               $lte: arr1[5],
//             },
//           },
//         },
//         {
//           $addFields: {
//             val: {
//               $cond: {
//                 if: { $in: ['$userId', Followers] },
//                 then: 'foll',
//                 else: 'nonfol',
//               },
//             },
//           },
//         },
//         {
//           $group: {
//             _id: '$val',
//             count: { $sum: 1 },
//           },
//         },
//       ],
//     },
//   },
//   {
//     $addFields: {
//       pair1: {
//         $cond: {
//           if: { $eq: [{ $size: '$pair1' }, 0] },
//           then: [
//             { _id: 'foll', count: 0 },
//             { _id: 'nonfol', count: 0 },
//           ],
//           else: {
//             $map: {
//               input: ['foll', 'nonfol'],
//               as: 'item',
//               in: {
//                 $mergeObjects: [
//                   { _id: '$$item', count: 0 },
//                   {
//                     $arrayElemAt: [
//                       {
//                         $filter: {
//                           input: '$pair1',
//                           as: 'p1',
//                           cond: { $eq: ['$$p1._id', '$$item'] },
//                         },
//                       },
//                       0,
//                     ],
//                   },
//                 ],
//               },
//             },
//           },
//         },
//       },
//       pair2: {
//         $cond: {
//           if: { $eq: [{ $size: '$pair2' }, 0] },
//           then: [
//             { _id: 'foll', count: 0 },
//             { _id: 'nonfol', count: 0 },
//           ],
//           else: {
//             $map: {
//               input: ['foll', 'nonfol'],
//               as: 'item',
//               in: {
//                 $mergeObjects: [
//                   { _id: '$$item', count: 0 },
//                   {
//                     $arrayElemAt: [
//                       {
//                         $filter: {
//                           input: '$pair2',
//                           as: 'p2',
//                           cond: { $eq: ['$$p2._id', '$$item'] },
//                         },
//                       },
//                       0,
//                     ],
//                   },
//                 ],
//               },
//             },
//           },
//         },
//       },
//       pair3: {
//         $cond: {
//           if: { $eq: [{ $size: '$pair3' }, 0] },
//           then: [
//             { _id: 'foll', count: 0 },
//             { _id: 'nonfol', count: 0 },
//           ],
//           else: {
//             $map: {
//               input: ['foll', 'nonfol'],
//               as: 'item',
//               in: {
//                 $mergeObjects: [
//                   { _id: '$$item', count: 0 },
//                   {
//                     $arrayElemAt: [
//                       {
//                         $filter: {
//                           input: '$pair3',
//                           as: 'p3',
//                           cond: { $eq: ['$$p3._id', '$$item'] },
//                         },
//                       },
//                       0,
//                     ],
//                   },
//                 ],
//               },
//             },
//           },
//         },
//       },
//       pair4: {
//         $cond: {
//           if: { $eq: [{ $size: '$pair4' }, 0] },
//           then: [
//             { _id: 'foll', count: 0 },
//             { _id: 'nonfol', count: 0 },
//           ],
//           else: {
//             $map: {
//               input: ['foll', 'nonfol'],
//               as: 'item',
//               in: {
//                 $mergeObjects: [
//                   { _id: '$$item', count: 0 },
//                   {
//                     $arrayElemAt: [
//                       {
//                         $filter: {
//                           input: '$pair4',
//                           as: 'p4',
//                           cond: { $eq: ['$$p4._id', '$$item'] },
//                         },
//                       },
//                       0,
//                     ],
//                   },
//                 ],
//               },
//             },
//           },
//         },
//       },
//       pair5: {
//         $cond: {
//           if: { $eq: [{ $size: '$pair5' }, 0] },
//           then: [
//             { _id: 'foll', count: 0 },
//             { _id: 'nonfol', count: 0 },
//           ],
//           else: {
//             $map: {
//               input: ['foll', 'nonfol'],
//               as: 'item',
//               in: {
//                 $mergeObjects: [
//                   { _id: '$$item', count: 0 },
//                   {
//                     $arrayElemAt: [
//                       {
//                         $filter: {
//                           input: '$pair5',
//                           as: 'p5',
//                           cond: { $eq: ['$$p5._id', '$$item'] },
//                         },
//                       },
//                       0,
//                     ],
//                   },
//                 ],
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// ]);

// console.log(graph1[0]);

// *****FOLLOWER GRAPH*****

console.log('***', fromDate);
let arr2 = [];
let dt2 = fromDate;
dt2 = new Date(dt2);

const date1 = roundOff(daysDifference);

console.log('round off days', date1);
const dayDuration1 = date1 / 10;

console.log(dayDuration1);

for (let i = 0; i < 10; i++) {
  let date = dt2.setDate(dt2.getDate() + dayDuration1);
  date = new Date(date);
  date = date.setHours(0, 0, 0);
  date=new Date(date);
  arr2.push(date);
  console.log(date)
}

arr2.unshift(fromDate)
arr2[10] = toDate;
console.log(arr2);


