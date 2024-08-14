import { serverURL } from "./serverURL";
import { commonApi } from "./commonApi";

// upload video
export const uploadVideo = async (reqBody) => {
    return await commonApi('POST', `${serverURL}/videos`, reqBody)
}

//get all videos
export const getAllVideos = async () => {
    return await commonApi('GET', `${serverURL}/videos`, "")
    // http://localhost:4000/videos
}

// delete video
export const deleteVideo = async (id) => {
    return await commonApi('DELETE', `${serverURL}/videos/${id}`,{})
    // http://localhost:4000/videos/1
}
