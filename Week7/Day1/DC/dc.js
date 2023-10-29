// 1. Create a class named Video.The class should be constructed with the following parameters:
// title(a string)
// uploader(a string, the person who uploaded it)
// time(a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// 3. Instantiate a new Video instance and call the watch() method.
// 4. Instantiate a second Video instance with different values.
// 5. Bonus: Use an array to store data for five Video instances(ie.title, uploader, time)
// Think of the best data structure to save this information within the array.
// 6. Bonus: Loop through the array to instantiate those instances.

// class Video{
//     constructor(title, uploader, time){
//         this.title = title;
//         this.uploader = uploader;
//         this.time = time;
//     }
//     watch(){
//         console.log(`${this.uploader} watched ${this.time} seconds of ${this.title}!` )
//     }
// }

// const video1 = new Video("Lesson1","JS Instructor", "210");
// const video2 = new Video("Unicorn", "Noa Kirel", "193");
// // console.log(video1);
// // video1.watch()
// // video2.watch()

// // 5.
// let videoArr = [
//     {
//         title: "Pantera",
//         uploader: "Noa Kirel",
//         time: "184"
//     },{
//         title: "Toy",
//         uploader: "Netta",
//         time: "197"
//     }, {
//         title: "Rishon ba boker",
//         uploader: "Anna Zak",
//         time: "192"
//     }, {
//         title: "Lo ze lo",
//         uploader: "Yael Selinger",
//         time: "179"
//     }, {
//         title: "Tel Aviv",
//         uploader: "Omer Adam",
//         time: "205"
//     }
// ];

// // console.log(videoArr);

// // 6.

// for (let i =0; i< videoArr.length; i++){
//     let videoArr2 = new Video();
//     videoArr2.title = videoArr[i].title;
//     videoArr2.uploader = videoArr[i].uploader;
//     videoArr2.time = videoArr[i].time;
//     videoArr2.watch();
// }


    