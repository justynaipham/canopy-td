const UNIVERSES_PER_PORT = 6;
const TOTAL_PORTS = 16;

let table = 'channel\tnet\tsubnet\tuniverse\n'

for (let p = 0; p < TOTAL_PORTS; p++) {
  for (let u = 0; u < UNIVERSES_PER_PORT; u++) {
    const channelName = `p${p}u${u}`;
    const universeNumber = u + p * UNIVERSES_PER_PORT;
    table = table.concat(`${channelName}\t0\t0\t${universeNumber}\n`)
  }
}

console.log(table);

/*
channel	net	subnet	universe
p0u0	0	0	0
p0u1	0	0	1
p0u2	0	0	2
p1u0	0	0	3
p1u1	0	0	4
p1u2	0	0	5
p2u0	0	0	6
p2u1	0	0	7
p2u2	0	0	8
p3u0	0	0	9
p3u1	0	0	10
p3u2	0	0	11
p4u0	0	0	12
p4u1	0	0	13
p4u2	0	0	14
p5u0	0	0	15
p5u1	0	0	16
p5u2	0	0	17
p6u0	0	0	18
p6u1	0	0	19
p6u2	0	0	20
p7u0	0	0	21
p7u1	0	0	22
p7u2	0	0	23
p8u0	0	0	24
p8u1	0	0	25
p8u2	0	0	26
p9u0	0	0	27
p9u1	0	0	28
p9u2	0	0	29
p10u0	0	0	30
p10u1	0	0	31
p10u2	0	0	32
p11u0	0	0	33
p11u1	0	0	34
p11u2	0	0	35
p12u0	0	0	36
p12u1	0	0	37
p12u2	0	0	38
p13u0	0	0	39
p13u1	0	0	40
p13u2	0	0	41
p14u0	0	0	42
p14u1	0	0	43
p14u2	0	0	44
p15u0	0	0	45
p15u1	0	0	46
p15u2	0	0	47
*/