function removeExtraSpaces(s:string[]):void{
  let slow:number = 0
  let fast:number = 0
  for(; fast<s.length; fast++){
      if(s[fast]!=' '){
          if(slow != 0){
              s[slow++] = ' '
          }
          while(fast < s.length && s[fast] != ' '){
              s[slow] = s[fast]
              fast++
              slow++
          }
      }
  }
  s.length = slow
}

let s = [
  't', 'h', 'e', 's',
  'k', 'y', 'i', 's',
  'b', 'l', 'u', 'e'
]
removeExtraSpaces(s)
console.log(s)