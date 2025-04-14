import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

export function Faq() {
  return (
    <section className="mt-12 text-sm text-muted-foreground">
      <h2 className="text-lg font-semibold text-foreground mb-4 text-start">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How often are exchange rates updated?</AccordionTrigger>
          <AccordionContent>
            Exchange rates are updated every hour to ensure you have access to the most accurate data possible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I use Cooins for business purposes?</AccordionTrigger>
          <AccordionContent>
            Absolutely. Cooins is ideal for freelancers, remote teams, and businesses that deal with international transactions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is Cooins free?</AccordionTrigger>
          <AccordionContent>
            Yes. Cooins is 100% free to use with no hidden fees or sign-up required.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
