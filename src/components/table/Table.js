import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {$} from '@core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type = "resizable"]')
      const coords = $parent.getCoords()

      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

      document.onmousemove = e => {
        console.log('mousemove');
        const delta = e.pageX - coords.right
        const value = coords.width + delta
        cells.forEach(el => el.style.width = value + 'px');
      }

      document.onmouseup = e => {
        document.onmousemove = null
      }
    }
  }
}
