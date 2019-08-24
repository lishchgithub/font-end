function Table(data) {
    if (data.length > 0) {
        var _this = this;
        this.column = new Array();
        for (var key in data[0]) {
            this.column.push(key);
        }
        this.line = this.column.length;
        this.data = new Array();
        data.forEach(function(item, index) {
            var row = new Array();
            for (var i in item) {
                if (Number(item[i])) {
                    row.push(Number(item[i]));
                } else {
                    row.push(item[i]);
                }
            }
            _this.data.push(row);
        });
        this.row = this.data.length;
        this.setcolumn = function(index, item) {
            index = index >= 0 ? index : (_this.line + index);
            _this.column[index] = item;
        }
        this.map = function(index, trans_func) {
            index = index >= 0 ? index : (_this.line + index);
            _this.data.forEach(function(row, row_index) {
                _this.data[row_index][index] = trans_func(row[index], row);
            })
        }
        this.addcolumn = function(column_name, value) {
            _this.column.push(column_name);
            _this.data.map(function(item) {
                item.push(value);
                return item
            })
        }
        this.nodisplay = new Array();
        this.set_hidden = function(index) {
            if (Number(index)) {
                index = index >= 0 ? index : (_this.line + index);
                _this.nodisplay.push(index);
            } else {
                _this.nodisplay = _this.nodisplay.concat(index);
            }
        }
        this.sort_asc = function(index) {
            _this.data.sort(function(x, y) {
                return x[index] >= y[index] ? 1 : -1
            })
        }
        this.sort_desc = function(index) {
            _this.data.sort(function(x, y) {
                return y[index] >= x[index] ? 1 : -1
            })
        }
        this.default = {
            class_name: 'records',
            choose_column: setArray(_this.line),
            choose_row: setArray(_this.row),
        }
        this.table = function(new_config) {
            config = $.extend(new_config, _this.default);
            // console.log(choose_row);
            var $table = $("<table></table>"),
                $thead = $('<thead></thead>'),
                $tbody = $('<tbody></tbody>');
            $table.addClass(config.class_name);
            $tbody.addClass(config.class_name + '_body');
            $table.append($thead).append($tbody);
            $thead_tr = $('<tr></tr>');
            $thead_tr.addClass(config.class_name + '_head');
            config.choose_column.forEach(function(item, index) {
                if (_this.nodisplay.indexOf(index) == -1) {
                    var $td = $("<td></td>");
                    $td.attr('tb-line', index);
                    $td.addClass(config.class_name + '_td');
                    $td.html(_this.column[item]);
                    $thead_tr.append($td);
                }
            });
            $thead.append($thead_tr);
            config.choose_row.forEach(function(row, row_index) {
                var $tr = $("<tr></tr>");
                $tr.addClass(config.class_name + '_row');

                config.choose_column.forEach(function(item, index) {
                    if (_this.nodisplay.indexOf(index) == -1) {
                        var $td = $("<td></td>");
                        $td.attr('tb-line', index);
                        $td.attr('tb-row', row_index);
                        $td.addClass(config.class_name + '_td');
                        $td.html(_this.data[row][item]);
                        $tr.append($td);
                    }
                });
                $tbody.append($tr);
            });
            return $table
        };
    }
}