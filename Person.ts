class Person {
  private personality: string;
  public constructor() {
    this.personality = "Mystery";
  }

  public askQuestion(answer: number) {
    if (answer === 1) {
      this.personality = "Extravert";
    } else if (answer === 2) {
      this.personality = "Introvert";
    } else {
      this.personality = "still a Mystery";
    }
  }

  public getPersonality() {
    return this.personality;
  }
}

export default Person;
