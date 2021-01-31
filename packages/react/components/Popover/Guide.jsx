import React, { useState } from 'react';
import { Code, InlineCode as I } from '../../helpers';
import Popover from './';
import Button from '../Button';
import c from 'clsx';
import s from '../../../common/Popover/guide.scss';

export default function PopoverGuide () {
  const [example, setExample] = useState(false);

  return (
    <>
      <h1>Popover</h1>
      <Code v="import { Popover } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Popover
        visible={example}
        onDismiss={()=> setExample(false)}
        className={s.example}
        content={(
          <>
            <div className={s.exampleTitle}>Notifications</div>
            <div className={s.exampleList}>
              <div className={s.exampleItem}>
                <div className={s.exampleAvatar} />
                <div className={s.exampleItemText}>
                  <div className={s.exampleItemTitle}>Уведомление</div>
                  <div className={s.exampleItemDesc}>Задача организации, в особенно...</div>
                </div>
              </div>
              <div className={s.exampleItem}>
                <div className={s.exampleAvatar} />
                <div className={s.exampleItemText}>
                  <div className={s.exampleItemTitle}>Уведомление</div>
                  <div className={s.exampleItemDesc}>Задача организации, в особенно...</div>
                </div>
              </div>
              <div className={s.exampleItem}>
                <div className={s.exampleAvatar} />
                <div className={s.exampleItemText}>
                  <div className={s.exampleItemTitle}>Уведомление</div>
                  <div className={s.exampleItemDesc}>Задача организации, в особенно...</div>
                </div>
              </div>
            </div>
            <div className={s.exampleActionCase}>
              <Button className={s.exampleAction}>
                Read all notifications
              </Button>
            </div>
          </>
        )}
      >
        <div
          className={c(s.exampleIcon, { [s.exampleIconActive]: example })}
          onClick={()=> setExample(!example)}
        />
      </Popover>
    </>
  )

}
