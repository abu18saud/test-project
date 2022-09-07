import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  newLine: string = "<br>";

  objects: any = [
    {
      name: "Abdullah",
      age: 31,
      work: 'EliteSkills'
    },
    {
      name: "Shimaa",
      age: 19,
      work: 'TVTC'
    },
    {
      name: "Reman",
      age: 19,
      work: 'TVTC'
    }
  ]


  getHello(): string {
    return 'Hello World!';
  }
  
  getAbdullah(): any {
    return {
      name: "Abdullah",
      age: 31,
      work: "EliteSkills"
    };
  }
  getCal(): number {
    return 100 + 200;
  }

  getNow(): Date {
    return new Date();
  }

  getObject(): any {
    let result = "";

    for (let object of this.objects) {
      result += "I am " + object.name + " my age is: " + object.age + " working at: " + object.work + this.newLine;
    }

    return result;
  }


}
