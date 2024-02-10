import { useTranslations } from 'next-intl';

export default function AppHello () {
  const t = useTranslations('common')

  return (
    <p>
      👋 {t('hello_message', { name: 'General Kenobi' } )}
    </p>
  )
}