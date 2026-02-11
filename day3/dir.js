// import fs from 'fs/promises';

// const makeDir = async (path) => {
//     try {
//         await fs.mkdir(path);
//         console.log("Directory has been created successfully");
//     } catch (error) {
//         console.log("Unable to create");
//     }
// }
// const readDir = async (path) => {
//     try {
//         const data = await fs.readdir(path, "utf-8");
//         console.log(data);
//     } catch (error) {
//         console.log("unable to read");
//     }
// }
// const removeDir = async (path) => {
//     try {
//         await fs.rmdir(path);
//         console.log("removed successfully...");
//     } catch (error) {
//         console.log("Unable to remove");
//     }
// }
// readDir("../day_01");
// removeDir("../day_03");
// removeDir("../day_04");



import fs from 'fs';

const makeDir = (path) => {
    try {
        fs.mkdirSync(path);
        console.log("Directory has been created successfully");
    } catch (error) {
        console.log("Unable to create");
    }
};

const readDir = (path) => {
    try {
        const data = fs.readdirSync(path, "utf-8");
        console.log(data);
    } catch (error) {
        console.log("unable to read");
    }
};

const removeDir = (path) => {
    try {
        fs.rmdirSync(path);
        console.log("removed successfully...");
    } catch (error) {
        console.log("Unable to remove");
    }
};

readDir("../day_01");
removeDir("../day_03");
removeDir("../day_04");
