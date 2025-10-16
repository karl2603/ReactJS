import UserCard from "./UserCard";

function DisplayUser(){
  
  return(
    <>
    <UserCard 
    Name = "Karl"
    Age = "19"
    Role = "Web Developer"
    />
    <UserCard 
    Name = "Hasini"
    Age = "17"
    Role = "Founder" 
    />
    <UserCard
    Name = "Vilasni"
    Age = "20"
    Role = "Support Dev"
    />

    </>
  )
}
export default DisplayUser;