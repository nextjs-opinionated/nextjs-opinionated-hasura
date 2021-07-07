import fs from 'fs-extra'

export async function code_gen_replace({
  from_file,
  to_file,
  replace_from,
  replace_to,
}: {
  from_file: string
  to_file: string
  replace_from: string
  replace_to: string
}) {
  console.log({
    from_file,
    to_file,
    replace_from,
    replace_to,
  })

  await fs.writeFile(
    to_file,
    (
      await fs.readFile(from_file, {
        encoding: 'utf8',
      })
    ).replace(new RegExp(replace_from, 'g'), replace_to),
    {
      encoding: 'utf8',
    }
  )
}
