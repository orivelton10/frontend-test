import { Component, OnInit } from '@angular/core';
import { ServiceRanking } from '../ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  public dataRankings: object;
  constructor(private myService: ServiceRanking) { }

  ngOnInit() {
    this.dataRankings = this.myService.getRanking()
      .subscribe(dataQuestion => {
          this.dataRankings = dataQuestion.data;
          console.log(this.dataRankings);
      });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(arr: Array<any>, prop: any, reverse: boolean = false): any {
    if (arr === undefined) return
    const m = reverse ? -1 : 1
    return arr.sort((a: any, b: any): number => {
      const x = a[prop]
      const y = b[prop]
      return (x === y) ? 0 : (x < y) ? -1*m : 1*m
    })
  }
}
