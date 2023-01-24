import { Skill } from "./Skill";

export class Developer {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public gender: string,
    public bio: string,
    public skills: Skill[] 
  ){}
}