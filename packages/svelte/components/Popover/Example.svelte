<script>
  import Button from '../Button';
  import s from '../../../common/Popover/guide.scss';
</script>

<div>
  <div class={s.exampleTitle}>Notifications</div>
  <div class={s.exampleList}>
    <div class={s.exampleItem}>
      <div class={s.exampleAvatar} />
      <div class={s.exampleItemText}>
        <div class={s.exampleItemTitle}>Уведомление</div>
        <div class={s.exampleItemDesc}>Задача организации, в особенно...</div>
      </div>
    </div>
    <div class={s.exampleItem}>
      <div class={s.exampleAvatar} />
      <div class={s.exampleItemText}>
        <div class={s.exampleItemTitle}>Уведомление</div>
        <div class={s.exampleItemDesc}>Задача организации, в особенно...</div>
      </div>
    </div>
    <div class={s.exampleItem}>
      <div class={s.exampleAvatar} />
      <div class={s.exampleItemText}>
        <div class={s.exampleItemTitle}>Уведомление</div>
        <div class={s.exampleItemDesc}>Задача организации, в особенно...</div>
      </div>
    </div>
  </div>
  <div class={s.exampleActionCase}>
    <Button class={s.exampleAction}>
      Read all notifications
    </Button>
  </div>
</div>
