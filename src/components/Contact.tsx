export default function Contact() {
  return (
    <section id='contact' className='py-24'>
      <div className='container-x'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <p className='eyebrow'>Contact</p>
            <h2 className='display-h2'>Let's talk.</h2>
            <p className='mt-6 text-[17px] text-neutral-700 max-w-[55ch]'>
              Working on something ambitious — an AI-native product, a Web3 system, a research
              platform, a team that needs to ship? Tell us a little about it.
            </p>
            <p className='text-[17px] text-neutral-700'>We reply within two business days.</p>

            <div className='mt-8 divide-y divide-neutral-300 max-w-md'>
              {[
                [
                  'Email',
                  <a key='e' href='mailto:contact@maplex.ch'>
                    contact@maplex.ch
                  </a>,
                ],
                ['Location', 'Zürich, Switzerland'],
                ['Languages', 'English · Deutsch'],
              ].map(([k, v]) => (
                <div key={String(k)} className='grid grid-cols-[120px_1fr] py-2.5 text-[14px]'>
                  <div className='font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 self-center'>
                    {k}
                  </div>
                  <div className='text-neutral-700'>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <form
            className='border border-ink p-8 bg-paper space-y-5'
            action='https://formsubmit.co/contact@maplex.ch'
            method='POST'
          >
            <input type='hidden' name='_subject' value='New MapleX inquiry' />
            <input type='hidden' name='_captcha' value='true' />
            <input type='hidden' name='_template' value='table' />
            <input
              type='text'
              name='_honey'
              style={{display: 'none'}}
              tabIndex={-1}
              autoComplete='off'
            />

            <Field id='f-name' label='Name'>
              <input
                id='f-name'
                name='name'
                type='text'
                required
                autoComplete='name'
                className={inputCls}
              />
            </Field>
            <Field id='f-email' label='Email'>
              <input
                id='f-email'
                name='email'
                type='email'
                required
                autoComplete='email'
                className={inputCls}
              />
            </Field>
            <Field id='f-company' label='Company' optional>
              <input
                id='f-company'
                name='company'
                type='text'
                autoComplete='organization'
                className={inputCls}
              />
            </Field>
            <Field id='f-message' label='What are you working on?'>
              <textarea
                id='f-message'
                name='message'
                rows={6}
                required
                className={inputCls + ' resize-y'}
              ></textarea>
            </Field>

            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2'>
              <button type='submit' className='btn btn-primary self-start whitespace-nowrap'>
                Send message <span aria-hidden='true'>→</span>
              </button>
              <span className='font-mono text-[11px] tracking-[0.08em] uppercase text-neutral-500'>
                Reply within 2 business days
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  'w-full bg-paper border border-neutral-300 px-3 py-2.5 text-[15px] text-ink rounded-sm focus:outline-none focus:border-ink transition-colors';

function Field({
  id,
  label,
  optional,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className='block font-mono text-[11px] tracking-[0.1em] uppercase text-neutral-500 mb-1.5'
      >
        {label}
        {optional && (
          <span className='ml-2 normal-case tracking-normal text-neutral-500'>(optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}
