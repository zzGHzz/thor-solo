import { HDNode } from 'thor-devkit'

const words = 'denial kitchen pet squirrel other broom bar gas better priority spoil cross'
const hdNode = HDNode.fromMnemonic(words.split(' '))

let defaultAccounts: string[] = []
for (let i = 0; i < 10; i++) {
	const priv = hdNode.derive(i).privateKey
	defaultAccounts.push('0x' + priv?.toString('hex'))
}
export { defaultAccounts }