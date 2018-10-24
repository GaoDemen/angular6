import { Component } from "@angular/core";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.less"]
})
export class OrderComponent {
  allChecked = false;
  indeterminate = false;
  displayData = [];
  data = [
    {
      name: "小花",
      phone:"13412341251",
      prize: 48,
      preferential:4,
      fare:3,
      address: "广州市西乡村22Ab",
      food:[
        {
            name:'小炒牛蛙',
            prize:8,
            number:1,
        },
        {
          name:'土豆丝',
          prize:8,
          number:2,
      }
    ]
    },
    {
      name: "小明",
      phone:"13412341251",
      prize: 53,
      preferential:3,
      fare:3,
      address: "广州市西乡村22Ab",
      food:[
        {
            name:'小炒牛蛙',
            prize:8,
            number:1,
        },
        {
          name:'土豆丝',
          prize:8,
          number:2,
      }
    ]
    },
    {
      name: "小六",
      phone:"13412341251",
      prize: 32,
      preferential:5,
      fare:3,
      address: "广州市西乡村22Ab",
      food:[
          {
              name:'小炒牛蛙',
              prize:8,
              number:1,
          },
          {
            name:'土豆丝',
            prize:8,
            number:2,
        }
      ]
    },
    {
      name: "桃子",
      phone:"13412341251",
      prize: 18,
      preferential:5,
      fare:3,
      address: "广州市西乡村22Ab",
      food:[
        {
            name:'小炒牛蛙',
            prize:8,
            number:1,
        },
        {
          name:'土豆丝',
          prize:8,
          number:2,
      }
    ]
    }
  ];

  currentPageDataChange(
    $event: Array<{
      name: string;
      age: number;
      address: string;
      checked: boolean;
      disabled: boolean;
    }>
  ): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const allChecked = this.displayData
      .filter(value => !value.disabled)
      .every(value => value.checked === true);
    const allUnChecked = this.displayData
      .filter(value => !value.disabled)
      .every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }
}
