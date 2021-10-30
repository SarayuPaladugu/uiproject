import { Component } from "@angular/core";

@Component({
selector : 'quote',
template : `<div>
<h1><ng-content></ng-content></h1>
<p align="right" class="quote">{{quote.line}}</p>
</div>`
})
export class QuoteComponent{
quote = {
"line" : "Education for everyone EveryWhere"
}
}