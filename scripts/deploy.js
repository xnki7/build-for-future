const { ethers } = require("hardhat")
const hre = require("hardhat")

const tokens = (n) => {
    return ethers.utils.parseEther(n.toString(), "gwie")
}

async function main() {

    //deploy appointments.sol
    const Appointments = await ethers.getContractFactory("Appointments")
    const appointments = await Appointments.deploy()
    await appointments.deployed()

    console.log(`\nAppointments contract is deloyed at: ${appointments.address}`)
    
    //Deploy Patient.sol
    const Patients = await ethers.getContractFactory("Patients")
    const patients = await Patients.deploy()
    await patients.deployed()

    console.log(`\nPatients contract is deloyed at: ${appointments.address}`);

}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
