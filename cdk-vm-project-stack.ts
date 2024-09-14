// lib/cdk-vm-project-stack.ts

import * as cdk from 'aws-cdk-lib';
import { Instance, InstanceType, MachineImage, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class CdkVmProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Crear una VPC (Virtual Private Cloud)
    const vpc = new Vpc(this, 'MyVpc', {
      maxAzs: 2
    });

    // Crear una instancia de EC2
    const instance = new Instance(this, 'WebAppInstance', {
      vpc,
      instanceType: new InstanceType('t2.micro'),
      machineImage: MachineImage.latestAmazonLinux(),
    });

    // Instrucciones para instalar Docker y correr docker-compose
    instance.addUserData(
      'sudo yum update -y',
      'sudo amazon-linux-extras install docker -y',
      'sudo service docker start',
      'sudo usermod -a -G docker ec2-user',
      'docker-compose up -d'
    );
  }
}
