/**
 * 残日数の計算
 */
 (function() {
    "use strict";

    /**
     * 経過年月日を計算する
     */
     const SetDuration = function(event) {
      // ① 期日を取得
      const dayValue = event.record['期日'].value;
      if(dayValue){
        const date = luxon.DateTime.fromISO(dayValue).startOf('day');

        // ② 現在日時を取得
        const currentDate = luxon.DateTime.local().startOf('day');

        // ③ 経過期間を計算する
        const duration = currentDate.diff(date, ['days']);

        // ④ 経過期間を日数で取得
        event.record['残日数'].value = duration.toObject().days;
      }

      return event;
    };


    kintone.events.on([
        'app.record.create.change.期日',
        'app.record.edit.change.期日',
        'app.record.create.show',
        'app.record.edit.show', 
        'app.record.detail.show'
    ], SetDuration);
    
})();
