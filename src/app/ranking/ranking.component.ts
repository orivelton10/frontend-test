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
  ]

  constructor(private myService: ServiceRanking) {}

  ngOnInit() {
    this.dataRankings = this.myService.getRanking()
      .subscribe(dataQuestion => {
        this.dataRankings = dataQuestion.data.sort(orderCelebrity);
        function orderCelebrity(a,b) {
          if (a.positive > b.positive)
             return -1;
          if (a.positive < b.positive)
            return 1;
          return 0;
        }

        for (let i in this.dataRankings) {
          this.dataRankings[i].positive = parseFloat(this.dataRankings[i].positive);
          this.dataRankings[i].negative = parseFloat(this.dataRankings[i].negative);
        }
        console.table(this.dataRankings);
      });      
  }
}
