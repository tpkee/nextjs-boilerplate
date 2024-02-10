import AppHello from "@/components/HelloWorld";

import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'meta',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Index () {
    return <AppHello />
}