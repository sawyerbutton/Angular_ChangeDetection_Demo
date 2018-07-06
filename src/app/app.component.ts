import {Component, DoCheck} from '@angular/core';
import { calls } from './support';
@Component({
  selector: 'app-root',
  template: `
        <h2>Check console</h2>
        <h3>看起来像是广度优先遍历</h3>
        {{addRender()}}
        <img src="../assets/CD1.gif">
        <br>
        <h3>实际上是深度优先遍历</h3>
        <h3></h3>
        <img src="../assets/CD2.gif">
        <k-comp></k-comp>
        <v-comp></v-comp>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('A');
  }

  addRender() {
    calls.render.push('A');
  }
}

@Component({
  selector: 'c-comp',
  template: `
        {{addRender()}}
        <h-comp></h-comp>
        <w-comp></w-comp>
    `
})
export class CComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('C');
  }

  addRender() {
    calls.render.push('C');
  }
}

@Component({
  selector: 'd-comp',
  template: `{{addRender()}}`
})
export class DComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('D');
  }

   addRender() {
    calls.render.push('D');
  }
}

@Component({
  selector: 'e-comp',
  template: `{{addRender()}}`
})
export class EComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('E');
  }

  addRender() {
    calls.render.push('E');
  }
}

@Component({
  selector: 'f-comp',
  template: `
        {{addRender()}}
        <q-comp></q-comp>
        <d-comp></d-comp>
    `
})
export class FComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('F');
  }

  addRender() {
    calls.render.push('F');
  }
}

@Component({
  selector: 'h-comp',
  template: `{{addRender()}}`
})
export class HComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('H');
  }

  addRender() {
    calls.render.push('H');
  }
}

@Component({
  selector: 'j-comp',
  template: `{{addRender()}}`
})
export class JComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('J');
  }

  addRender() {
    calls.render.push('J');
  }
}

@Component({
  selector: 'k-comp',
  template: `
        {{addRender()}}
        <l-comp></l-comp>
        <c-comp></c-comp>
    `
})
export class KComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('K');
  }

  addRender() {
    calls.render.push('K');
  }
}

@Component({
  selector: 'l-comp',
  template: `
        {{addRender()}}
        <j-comp></j-comp>
        <o-comp></o-comp>
    `
})
export class LComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('L');
  }

  addRender() {
    calls.render.push('L');
  }
}

@Component({
  selector: 'o-comp',
  template: `{{addRender()}}`
})
export class OComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('O');
  }

  addRender() {
    calls.render.push('O');
  }
}

@Component({
  selector: 'q-comp',
  template: `{{addRender()}}`
})
export class QComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('Q');
  }

  addRender() {
    calls.render.push('Q');
  }
}

@Component({
  selector: 'r-comp',
  template: `{{addRender()}}`
})
export class RComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('R');
  }

  addRender() {
    calls.render.push('R');
  }
}

@Component({
  selector: 'v-comp',
  template: `
        {{addRender()}}
        <x-comp></x-comp>
        <f-comp></f-comp>
    `
})
export class VComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('V');
  }

  addRender() {
    calls.render.push('V');
  }
}

@Component({
  selector: 'w-comp',
  template: `{{addRender()}}`
})
export class WComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('W');
  }

  addRender() {
    calls.render.push('W');
  }
}

@Component({
  selector: 'x-comp',
  template: `
    {{addRender()}}
    <e-comp></e-comp>
    <r-comp></r-comp>
    `
})
export class XComponent implements DoCheck {
  ngDoCheck() {
    calls.ngDoCheck.push('X');
  }

  addRender() {
    calls.render.push('X');
  }
}

