import ProductInfo from '@/components/product-info';
import { prisma } from '@/server/prisma';
import { type Metadata } from 'next';
import { redirect } from 'next/navigation';
 
type Props = {
  params: { slug: string },
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const metadata = await prisma.product.findUnique({
    where: {
      slug: params.slug,
    },
    select: {
      name: true,
      tagline: true,
    }
  })
  return {
    title: (metadata?.name || "Product"),
    description: metadata?.tagline || "A product on pmaker",
  }
}

export default async function ProductPage ({ params } : Props) {

  const data = await prisma.product.findUnique({
    where: {
      slug: params.slug,
    }
  })

  if (!data || !data.isFeatured) {
    redirect("/");
  }

  return (
    <ProductInfo data={data} /> 
  );
}