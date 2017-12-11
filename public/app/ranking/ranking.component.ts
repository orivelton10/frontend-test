import { Component, OnInit } from '@angular/core';
import { ServiceRanking } from '../ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  public dataRankings: any;
  public reactCelebrity:Array<any> = [
    { like : "Gostam", dontLike: "Não gostam" }
  ];

  constructor(private myService: ServiceRanking) {}

  ngOnInit() {
    this.dataRankings = this.myService.getRanking()
      .subscribe(dataQuestion => {
        this.dataRankings = dataQuestion.data.sort(orderCelebrity);
        for(let i in this.dataRankings) {
          let positive = Number(this.dataRankings[i].positive);
          let negative = Number(this.dataRankings[i].negative);

          if (positive > 0 &&  positive > 0) {
            let resultPositive = parseFloat(positive)/parseFloat(positive  + negative);
            let totalPositive = parseFloat(resultPositive * 100);
            this.dataRankings[i].positive = totalPositive.toFixed(0) + '%';

            let resultNegative = parseFloat(negative)/parseFloat(negative + positive);
            let totalNegative = parseFloat(resultNegative * 100);
            this.dataRankings[i].negative = totalNegative.toFixed(0) + '%';
          }
        }
      });

      function orderCelebrity(a,b) {
        if (a.positive > b.positive)
           return -1;
        if (a.positive < b.positive)
          return 1;
        return 0;
      }
  }
}
