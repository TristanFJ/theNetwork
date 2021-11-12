export class Post {
  constructor(data){
    this.body = data.body 
    this.id = data.id 
    this.creator = data.creator 
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.imgUrl = data.imgUrl
    this.likes = data.likes
  }
}