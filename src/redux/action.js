export const post = (newPost) =>({type:'POST',payload:newPost})
export const del = (id) =>({type:'DEL',payload:id})
export const put = (object) =>({type:'PUT',payload:object})
