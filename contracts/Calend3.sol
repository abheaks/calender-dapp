// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Calend3 {
    uint rate;
    address payable public owner;
    struct Appointment {
        string title;
        address attendee;
        uint startTime;
        uint endTime;
        uint amountPaid;
    }

    Appointment[] appointments;

    constructor() {
        owner = payable(msg.sender);
    }

    function getRate() public pure returns (string memory) {
        string memory res = "Hello World";
        return res;
    }

    function setRate(uint _rate) public {
        // require(msg.sender == owner, "Only the owner can set the rate");
        rate = _rate;
    }

    function getRateValue() public view returns (uint) {
        return rate;
    }

    // function getAppointments() public view returns (Appointment[] memory) {
    //     return (appointments);
    // }

    // function createAppointment(
    //     string memory title,
    //     uint startTime,
    //     uint endTime
    // ) public payable {
    //     Appointment memory appointment;
    //     appointment.title = title;
    //     appointment.startTime = startTime;
    //     appointment.endTime = endTime;
    //     appointment.amountPaid = ((endTime - startTime) / 60) * rate;
    //     require(msg.value >= appointment.amountPaid, "We require more ether");
    //     (bool success, ) = owner.call{value: msg.value}("");
    //     require(success, "Failed to send Ether");

    //     appointments.push(appointment);
    // }
}

// pragma solidity ^0.8.4;

// contract Calend3 {
//     function _split(
//         bytes memory signature
//     ) internal pure returns (bytes32 r, bytes32 s, uint8 v) {
//         require(signature.length == 65, "Signature must be 65 bytes long");

//         assembly {
//             r := mload(add(signature, 32))

//             s := mload(add(signature, 64))

//             v := byte(0, mload(add(signature, 96)))
//         }
//     }

//     function getMessageHash(
//         string memory message
//     ) public pure returns (bytes32) {
//         return keccak256(abi.encodePacked(message));
//     }

//     function getEthSignedMessageHash(
//         bytes32 messageHash
//     ) public pure returns (bytes32) {
//         return
//             keccak256(
//                 abi.encodePacked(
//                     "\x19Ethereum Signed Message:\n32",
//                     messageHash
//                 )
//             );
//     }

//     function recover(
//         bytes32 ethSignedMessageHash,
//         bytes memory signature
//     ) public pure returns (address) {
//         (bytes32 r, bytes32 s, uint8 v) = _split(signature);

//         return ecrecover(ethSignedMessageHash, v, r, s);
//     }

//     function verifySignature(
//         string memory message,
//         bytes memory signature
//     ) public pure returns (address) {
//         bytes32 messageHash = getMessageHash(message);

//         bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);

//         return recover(ethSignedMessageHash, signature);
//     }
// }
