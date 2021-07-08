import fs from 'fs-extra'

export async function code_gen_replace({
  from_file,
  to_file,
  replaces,
}: {
  from_file: string
  to_file: string
  replaces: {
    from: string
    to: string
  }[]
}) {
  console.log({
    from_file,
    to_file,
    replaces,
  })

  await fs.ensureFile(to_file)

  // load
  let content_from = await fs.readFile(from_file, {
    encoding: 'utf8',
  })

  // replace all
  replaces.forEach((replaceObj) => {
    content_from = content_from.replace(new RegExp(replaceObj.from, 'g'), replaceObj.to)
  })

  // save
  await fs.writeFile(to_file, content_from, {
    encoding: 'utf8',
  })
}
