import { Component } from "@angular/core";
import { Form, FormBuilder, FormGroup } from "@angular/forms";
import {
  DadataConfig,
  DadataParty,
  DadataSuggestion,
  DadataType,
} from "@kolkov/ngx-dadata";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  form: FormGroup;

  configAddress: DadataConfig = {
    apiKey: "2e51c5fbc1a60bd48face95951108560bf03f7d9",
    type: DadataType.address,
    locations: [
      {
        // city: "Москва",
        city_fias_id: "5bf5ddff-6353-4a3d-80c4-6fb27f00c6c1",
        country_iso_code: "RU",
        region_fias_id: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
      },
    ],
    restrictValue: true,
  };
  configFio: DadataConfig = {
    apiKey: "2e51c5fbc1a60bd48face95951108560bf03f7d9",
    type: DadataType.fio,
  };
  configParty: DadataConfig = {
    apiKey: "2e51c5fbc1a60bd48face95951108560bf03f7d9",
    type: DadataType.party,
    partyAddress: "full",
  };

  constructor(fb: FormBuilder) {
    this.form = fb.group({ city: null });
  }

  onPartySelect(event: DadataSuggestion) {
    const partyData = event.data as DadataParty;
    console.log(partyData);
  }

  qwe(): void {
    console.log(this.form);
  }
}
